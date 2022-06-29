import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {

  }

listUsuarios: Usuario[] = [
  {usuario: "ste123", nombre: 'Steveen', apellido: 'Torres', sexo: 'Masculino'},
  {usuario: "ste123", nombre: 'Steveen', apellido: 'Torres', sexo: 'Masculino'},
  {usuario: "ste123", nombre: 'Steveen', apellido: 'Torres', sexo: 'Masculino'},
  {usuario: "ste123", nombre: 'Steveen', apellido: 'Torres', sexo: 'Masculino'},
  {usuario: "ste123", nombre: 'Steveen', apellido: 'Torres', sexo: 'Masculino'},
  {usuario: "ste123", nombre: 'Steveen', apellido: 'Torres', sexo: 'Masculino'},
  {usuario: "ste123", nombre: 'Steveen', apellido: 'Torres', sexo: 'Masculino'},
  {usuario: "ste123", nombre: 'Steveen', apellido: 'Torres', sexo: 'Masculino'},
  {usuario: "ste123", nombre: 'Steveen', apellido: 'Torres', sexo: 'Masculino'},
  {usuario: "ste123", nombre: 'Steveen', apellido: 'Torres', sexo: 'Masculino'},
  {usuario: "ste123", nombre: 'Steveen', apellido: 'Torres', sexo: 'Masculino'},
  {usuario: "ste123", nombre: 'Steveen', apellido: 'Torres', sexo: 'Masculino'},
  {usuario: "ste123", nombre: 'Steveen', apellido: 'Torres', sexo: 'Masculino'},
];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
