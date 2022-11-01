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

class Person(db.Model):
    __tablename__ = 'person'
    id = db.Column(db.Integer, primary_key=True)
    person_name = db.Column(db.String(250), unique=True)
    eye_color = db.Column(db.String(250))
    hair_color = db.Column(db.String(250))
    skin_color = db.Column(db.String(250))
    birth_year = db.Column(db.String(250))
    gender = db.Column(db.String(250))

    def serialize(self):
        return{
            "name": self.person_name,
            "eye_color": self.eye_color,
            "hair_color": self.hair_color,
            "skin_color": self.skin_color,
            "birth_year": self.birth_year,
            "gender": self.gender,
        }

    def deserialize(data={}):
        return Person(**data) 

class Planet(db.Model):
    __tablename__ = 'planets'
    id = db.Column(db.Integer, primary_key=True)
    planet_name = db.Column(db.String(250),unique=True)
    diameter = db.Column(db.String(250))
    climate = db.Column(db.String(250))
    terrain = db.Column(db.String(250))
    population = db.Column(db.String(250))
    person_id = db.Column(db.Integer, db.ForeignKey('person.id'))
    person = db.relationship(Person)

    def serialize(self):
        return{
            "planet_name": self.planet_name,
            "diameter": self.diameter,
            "climate": self.climate,
            "terrain": self.terrain,
            "population": self.population,
        }

    def deserialize(data={}):
        return Planet(**data) 

class Vehicle(db.Model):
    __tablename__ = 'vehicle'
    id = db.Column(db.Integer, primary_key=True)
    vehicle_name = db.Column(db.String(250))
    model = db.Column(db.String(250))
    manufacturer = db.Column(db.String(250))
    passenger = db.Column(db.String(250))
    cost_in_credits = db.Column(db.String(250))
    vehicle_class = db.Column(db.String(250))

    def serialize(self):
        return{
            "vehicle_name": self.vehicle_name,
            "model": self.model,
            "manufacturer": self.manufacturer,
            "passenger": self.passenger,
            "cost_in_credits": self.cost_in_credits,
            "vehicle_class": selfvehicle_class,
        }

    def deserialize(data={}):
        return Vehicle(**data)    
