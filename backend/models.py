from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class songs(Base):
    __tablename__ = 'songs'
    id = Column(Integer, primary_key=True)
    title = Column(String)
    artist = Column(String)
    all_lyrics = relationship('Lyrics', back_populates='song')
class lyrics(Base):
    __tablename__ = 'lyrics'
    id = Column(Integer, primary_key=True)
    line_number = Column(Integer)
    text = Column(String)
    song_id = Column(Integer, ForeignKey('songs.id'))