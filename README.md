# sec-passwd-api
Prototype of a REST API that generates secure passwords.
As input parameters in the request the user has to provide:
* length
* number of special characters in the password
* number of numbers in the password
* number of passwords that must be created

The length of the password must be between 8 and 128.  
The number of special characters plus the number of numbers can never be more than *length-2*.

If these requirements are not met, the program will use the following default settings:
* length: 12
* special characters: 2
* number of numbers: 2

The program generates the passwords in response and return them in an array.



## Instructions
To be able to run the application, first run:

```
npm install
```

To launch the app run:

```
npm start
```

Request example:
```
http://localhost:5000/generate/12/4/4/10
```