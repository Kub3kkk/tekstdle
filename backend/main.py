from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import engine, Base, get_db
from models import songs, lyrics

Base.metadata.create_all(bind=engine)


app = FastAPI()