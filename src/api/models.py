from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from eralchemy import render_er

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
#python src/models.py to create
# a new diagram showing changes

Base = declarative_base()

class Person(db.Model):
    __tablename__ = 'person'
    id = db.Column(db.Integer, primary_key=True)
    person_name = db.Column(db.String(250), unique=True)
    eye_color = db.Column(db.String(250))
    hair_color = db.Column(db.String(250))
    skin_color = db.Column(db.String(250))
    birth_year = db.Column(db.String(250))
    gender = db.Column(db.String(250))

class Planet(db.Model):
    __tablename__ = 'planets'
    id = db.Column(db.Integer, primary_key=True)
    planet_name = db.Column(db.String(250),unique=True)
    diameter = db.Column(db.String(250))
    climate = db.Column(db.String(250))
    terrain = db.Column(db.String(250))
    population = db.Column(db.String(250))
    person_id = db.Column(db.Integer, db.ForeignKey('person.id'))
    person = relationship(Person)

class Vehicle(db.Model):
    __tablename__ = 'vehicle'
    # Here we define columns for the table address.
    # Notice that each column is also a normal Python instance attribute.
    id = db.Column(db.Integer, primary_key=True)
    vehicle_name = db.Column(db.String(250))
    model = db.Column(db.String(250))
    manufacturer = db.Column(db.String(250))
    passenger = db.Column(db.String(250))
    cost_in_credits = db.Column(db.String(250))
    vehicle_class = db.Column(db.String(250))
    person_id = db.Column(db.Integer, db.ForeignKey('person.id'))
    person = db.relationship(Person)

    def to_dict(self):
        return {}

## Draw from SQLAlchemy base
render_er(db.Model, 'diagram.png')