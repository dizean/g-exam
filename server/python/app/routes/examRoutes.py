from fastapi import APIRouter

router = APIRouter()

@router.post("/generate")
def generate_exam(data: dict):
    return {
        "message": "Python service working",
        "input": data
    }