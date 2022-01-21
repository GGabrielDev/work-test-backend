# Prueba para Aplicación de Trabajo - Backend

Pasos para arrancar el proyecto

1. Ejecutar el comando `npm i`
2. Ejecutar `npm run start:dev`

El servidor es montado en el puerto `8080`

## Endpoints
### **GET** `"/"` AuthUser
  Este endpoint es para verificar si el token del lado del cliente es válido.
```
headers: {
	Authorization: JWTString,
}

Responses:
	401: {
		error: "You must be logged in."
	}  
	200: "User successfully authenticated"
```
### **POST** `/register` SignUpUser
Este endpoint crea un nuevo usuario dentro de la base de datos. Las claves son pasadas por `bcrypt` para mayor seguridad. Retorna un JWT.
```
	request: {
		body: {
			email: string,
			password: string,
		}
	}
Responses:
	422: unexpected err
	200: { token: JWTString }
```
### **POST** `/login` SignInUser
Este endpoint confirma si el usuario insertado existe dentro de la base de datos. Las claves son pasadas por `bcrypt` para mayor seguridad. Retorna un JWT.
```
	request: {
		body: {
			email: string,
			password: string,
		}
	}
Responses:
	422: "Invalid email and password"
	200: { token: JWTString }
```
### **POST** `/categories` CreateCategory
Crea una nueva categoría en la base de datos y la retorna.
```
	request: {
		body: {
			name: string,
		}
	}
Responses:
	400: "Empty request body"
	401: "Bad Request: unexpected err"
	201: Category: {
		name: string,
		id: ObjectID | string,
	}
```
### **GET** `/categories` GetCategories
Retorna todas las categorías en la base de datos.
```
Responses:
	400: "Bad Request"
	200: Category: {
		name: string,
		id: ObjectID | string,
	}[]
```
### **PUT** `/categories/:id` UpdateCategory
Actualiza los valores de una categoría  en la base de datos.
```
	request: {
		params: {
			id: ObjectID | string
		}	
		body: { 
			name: string, 
		} 
	}
Responses:
	404: "Category not found"
	200: "Category updated successfully"
```
### **DELETE** `/categories/:id` DeleteCategory
Elimina una categoría de la base de datos.
```
	request: {
		params: {
			id: ObjectID | string
		}	
	}
Responses:
	404: "Category not found"
	403: "Categories with products cannot be deleted"
	400: unexpected err
	200: "Category deleted successfully"
```
### **POST** `/products` CreateProduct
Crea un nuevo producto en la base de datos y lo retorna.
```
	request: {
		body: {
			name: string,
			stock: number,
			price: number,
			img: string,
			category: Category: {
				id: ObjectID | string,
				name: string;
			}
		}
	}
Responses:
	400: "Empty Request Body"
	400: "Bad Request: Entity empty"
	400: "Bad Request: Product's Category empty"
	400: "Bad Request: unexpected err"
	201: Product: {
			id: ObjectID | string,
			name: string,
			stock: number,
			price: number,
			img: string,
			category: Category: {
				name: string;
			}
	}
```
### **GET** `/products` GetProducts
Retorna todos los productos de la base de datos.
```
Responses:
	400: "Bad Request"
	200: Product: {
			id: ObjectID | string,
			name: string,
			stock: number,
			price: number,
			img: string,
			category: Category: {
				name: string;
		}[]
```
### **GET** `/products/:categoryID` GetProductsByCategory
Retorna todos los productos de la base de datos los cuales estén en una categoría perteneciente a la id provista.
```
	request: {
		params: {
			id: ObjectID | string,
		}
	}

Responses:
	404: "Category not found"
	200: Product: {
			id: ObjectID | string,
			name: string,
			stock: number,
			price: number,
			img: string,
			category: Category: {
				name: string;
		}[]
```
### **PUT** `/products/:id` UpdateCategory
Actualiza los valores de un producto en la base de datos.
```
	request: {
		params: {
			id: ObjectID | string
		}	
		body: {
			name: string,
			stock: number,
			price: number,
			img: string,
			category: Category: {
				id: ObjectID | string,
				name: string;
			}
	}
Responses:
	404: "Product not found"
	200: "Product updated successfully"
```
### **DELETE** `/products/:id` DeleteProduct
Elimina un producto de la base de datos.
```
	request: {
		params: {
			id: ObjectID | string
		}	
	}
Responses:
	404: "Product not found"
	400: unexpected rr
	200: "Product deleted successfully"
```e
