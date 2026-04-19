from fastapi import FastAPI
from app.routes import examRoutes

app = FastAPI()

app.include_router(examRoutes.router)

@app.get("/")
def root():
    return {"message": "Python AI service running 🚀"}