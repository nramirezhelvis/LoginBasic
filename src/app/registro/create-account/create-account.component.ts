import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../core/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
  /* nombre del formulario */
  formularioRegisroUsuarios: FormGroup

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) {
    this.formularioRegisroUsuarios = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      gmail: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required]]
    })
  }

  protected enviar() {
    const valor = this.formularioRegisroUsuarios.value;
    const user: User = {
      username: valor.username,
      password: valor.password,
      email: valor.gmail,
      age: valor.age
    }

    this.userService.registrarse(user).subscribe((respuesta) => {

      alert("Cuenta creada con exito");
    }, (error) => {
      alert("Ocurrio un error al momento de crear la cuenta")
    });

    console.log('Formulario enviado con exito');
  }
  protected redirigirLogin() {
    this.router.navigate([''])
  }
}
