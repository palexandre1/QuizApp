from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from data import quizzes

app = FastAPI()

origins = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
)


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/quizzes")
def read_quizzes():
    return quizzes

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}