import gradio as gr
from llama_index.llms.ollama import Ollama

# 1. Conectar con el modelo de Ollama que ya descargaste (llama3.1:latest)
llm = Ollama(
    model="llama3.1:latest", 
    request_timeout=120.0
)

# 2. Función que procesa los mensajes del chat
def responder(message, history):
    response = llm.complete(message)
    return str(response)

# 3. Crear la interfaz gráfica con Gradio
demo = gr.ChatInterface(
    fn=responder,
    title="🤖 Mi Chatbot Local con Ollama y Gradio",
    description="Pregúntame lo que quieras, estoy ejecutándome 100% en tu máquina.",
    textbox=gr.Textbox(placeholder="Escribe tu consulta aquí...", container=False, scale=7)
)

# 4. Lanzar la aplicación
if __name__ == "__main__":
    demo.launch()