from pathlib import Path
import re
from dulwich.object_format import SHA1
from dulwich.pack import PackData

pack_dir = Path.home() / "Downloads" / "SIGPRA-Web-Prototype" / "source" / "packs"
out_dir = Path.cwd() / "figma-make"
objects = {}

for pack_path in pack_dir.glob("*.pack"):
    for obj in PackData(str(pack_path), SHA1).iter_unpacked(include_comp=False):
        objects[obj.sha().hex()] = (obj.obj_type_num, b"".join(obj.obj_chunks))

commit_data = objects["a88931bfd0f7e04fa48c0fb2de73d3a5d0756f4d"][1]
tree_sha = re.search(rb"^tree ([0-9a-f]+)", commit_data, re.MULTILINE).group(1).decode()


def walk_tree(tree_hash: str, directory: Path) -> None:
    data = objects[tree_hash][1]
    position = 0
    while position < len(data):
        space = data.index(b" ", position)
        nul = data.index(b"\0", space)
        name = data[space + 1:nul].decode("utf-8", "replace")
        child_hash = data[nul + 1:nul + 21].hex()
        child_type, child_data = objects[child_hash]
        target = directory / name
        if child_type == 2:
            walk_tree(child_hash, target)
        elif child_type == 3:
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(child_data)
        position = nul + 21


out_dir.mkdir(exist_ok=True)
walk_tree(tree_sha, out_dir)
print(f"Extraidos {len(list(out_dir.rglob('*')))} elementos en {out_dir}")
