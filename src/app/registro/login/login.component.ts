import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/user.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    public username: string = "";
    public password: string = "";

    constructor(private router: Router, private userService: UserService) { }

    protected goToSesion(form: NgForm) {
        if (form.valid) {
            this.userService.iniciarSesion(this.username, this.password).subscribe((response) => {
                console.log("Usuario logueado correctamente");
                this.router.navigate(['home'])
            }, error => {
                alert("Credenciales incorrectas")
            });
        } else {
            this.validaciones(this.username, this.password)
        }
    }

    protected goToRegister() {
        this.router.navigate(['createAccount']);
    }

    //validaciones
    private validaciones(username: string, password: string) {
        if (!username && !password) {
            alert("Ingrese usuario y contraseña porfavor")
            return
        }
        if (!username) {
            alert("Ingrese su usuario")
            return
        } if (!password) {
            alert("Ingrese su password")
            return
        }
    }

    //styles:
    protected contenedorActivo: number = 0;
    protected selectInputText(contenedor: number): void {
        this.contenedorActivo = contenedor;
    }
}
