import { Component, OnInit } from '@angular/core';
import {faBuilding } from '@fortawesome/free-solid-svg-icons';
import {faHome } from '@fortawesome/free-solid-svg-icons';
import {faFileInvoice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-management-system',
  templateUrl: './management-system.component.html',
  styleUrls: ['./management-system.component.css']
})
export class ManagementSystemComponent implements OnInit {

  faBuilding = faBuilding;
  faHome = faHome;
  faFileInvoice = faFileInvoice;

  constructor() { }

  ngOnInit(): void {
  }

}
