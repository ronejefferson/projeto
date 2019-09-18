import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  protected usuario: Usuario = new Usuario;

  constructor(
    protected usuarioService: UsuarioService,
    protected router: Router
  ) { }

  ngOnInit() {
  }

  onsubmit(form) {
    console.log(this.usuario);
    this.usuarioService.save(this.usuario)
      .subscribe(
        res => {
          console.log("Cadastrado!", res);
          form.reset();
          //this.router.navigate(["/"])
          this.router.navigateByUrl('/', { skipLocationChange: true })
            .then(() =>
              this.router.navigate(['/addUsuario']));
          alert("Cadastrado!");
        },
        err => {
          console.log("Não cadastrado!", err);
          alert("Não cadastrado!");
        }
      )
  }

  protected cep: string;

  buscaCep() {
    if (this.cep.length > 7) {
      this.usuarioService.getEndereco(this.cep)
        .subscribe(
          res => {
            console.log(res);
          }
        )
    }
  }

}
