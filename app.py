
from flask import Flask, render_template,jsonify
from flask_mysqldb import MySQL


app=Flask(__name__)
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']=''
app.config['MYSQL_DB']='1'

conexion = MySQL(app)

@app.route('/')
def hola():
    data={
            'titulo2' : 'BIBLIOMOVIES',
            'titulo' : 'BiblioMovies',
            'bienvenida':'!Saludos'

        
    }							
    return render_template('index1.html', data=data)

@app.route('/peliculas')
def pelicula():
    data={
         
        'titulo2' : 'PÉLICULAS',
        'titulo' : 'BiblioMovies - Películas',
        'bienvenida':'!Saludos'

    }
    return render_template('index2.html',data=data)

@app.route('/principal')
def principal():
    data={
        'titulo2' : 'PRUEBA',         
        'titulo' : 'PRUEBA',
        'bienvenida':'!Saludos'

    }
    return render_template('index.html', data=data)

@app.route('/musica')
def musica():
    data={
        'titulo2' : 'EN CONSTRUCCIÓN',         
        'titulo' : 'EN CONSTRUCCIÓN',
        'bienvenida':'!Saludos'

    }
    return render_template('index.html', data=data)

@app.route('/cursos')
def lista_cursos():
    data={ 
        
        'titulo2' : 'EN CONSTRUCCIÓN',         
        'titulo' : 'EN CONSTRUCCIÓN',
        
    }
    try:
        cursor = conexion.connection.cursor()
        sql="SELECT * FROM pelicula1 ORDER BY TOPOGRAFICO ASC"
        cursor.execute(sql)
        cursos=cursor.fetchall()
        data['mensaje']='exitoooo'
        data['cursos'] = cursos
       
    except Exception as ex:
        data['mensaje']='Error.....'
    return render_template('index.html', data=data)


@app.route('/login')
def login():
    
    return render_template('login.html')

if __name__=='__main__':
    app.run(debug=True, port=5000)