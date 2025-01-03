import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    // Mostrar ou ocultar senha
    const showPasswordCheckbox = document.getElementById("showPassword") as HTMLInputElement;
    const passwordField = document.getElementById("password") as HTMLInputElement;

    showPasswordCheckbox?.addEventListener("change", () => {
      passwordField.type = showPasswordCheckbox.checked ? "text" : "password";
    });

    // Lógica de login
    const loginButton = document.getElementById("loginButton") as HTMLButtonElement;

    loginButton?.addEventListener("click", () => {
      const username = (document.getElementById("username") as HTMLInputElement).value.trim();
      const password = (document.getElementById("password") as HTMLInputElement).value.trim();
      const accessLevel = (document.getElementById("accessLevel") as HTMLSelectElement).value;

      const validUsers = [
        { username: "admin", password: "1234", accessLevel: "admin" },
        { username: "user", password: "password", accessLevel: "funcionario" }
      ];

      const isValidUser = validUsers.some(
        (user) =>
          user.username === username &&
          user.password === password &&
          user.accessLevel === accessLevel
      );

      const errorMessage = document.getElementById("loginError") as HTMLElement;

      if (isValidUser) {
        window.location.href = "home.html";
      } else {
        errorMessage.style.display = "block";
      }
    });
  }

}
