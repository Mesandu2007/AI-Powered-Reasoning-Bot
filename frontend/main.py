from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from openai import OpenAI
import os
from dotenv import load_dotenv
load_dotenv()




client = OpenAI(
        api_key=os.environ.get("GROQ_API_KEY"), 
        base_url="https://api.groq.com/openai/v1",
    )



class chatRequest(BaseModel):
    message:str

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True


)








def get_bot_response(user_message):
    message=user_message.lower()
    response = client.responses.create(
    model="openai/gpt-oss-20b",
    input=[
        {
            "role": "system",
            "content": "You are a helpful chatbot"
        },
        {
            "role": "user",
            "content": message.strip()
        }
    ],
    )
    return response.output[0].content[0].text




    








@app.post("/chat")
def chat(request:chatRequest):
    reply=get_bot_response(request.message)
    return {"reply":reply}
