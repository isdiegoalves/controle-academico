import {Injectable} from '@angular/core';

@Injectable()
/**
 * menu data service
 */
export class MenuDataService {
  getMenuList() {
    return [
      {
        Label: 'Home', Icon: 'fa-home', RouterLink: '/main/dashboard', Childs: null, IsChildVisible: false
      },
      {
        Label: 'Controle de alunos', Icon: 'fa-users', RouterLink: null, Childs: [
          {Label: 'Dados pessoais e acadêmicos', RouterLink: '/main/employees', Childs: null, IsChildVisible: false},
          {Label: 'Atestado de frequência', RouterLink: '/main/employees', Childs: null, IsChildVisible: false},
        ], IsChildVisible: false
      },
      {
        Label: 'Controle de cursos', Icon: 'fa-book', RouterLink: null, Childs: [
          {Label: 'Dados de cursos', RouterLink: '/main/departments', Childs: null, IsChildVisible: false}
        ], IsChildVisible: false
      },
      {
        Label: 'Controle de matrículas', Icon: 'fa-graduation-cap', RouterLink: null, Childs: [
          {Label: 'Efetuar matrícula', RouterLink: '/main/aboutus', Childs: null, IsChildVisible: false},
        ], IsChildVisible: false
      },
      {
        Label: 'Controle de pagamentos', Icon: 'fa-dollar-sign', RouterLink: null, Childs: [
          {Label: 'Menu Level 1.1', RouterLink: null, Childs: null, IsChildVisible: false},
          {
            Label: 'Menu Level 1.2', RouterLink: null, IsChildVisible: false, Childs: [
              {Label: 'Menu Level 1.2.1', RouterLink: null, Childs: null, IsChildVisible: false},
              {Label: 'Menu Level 1.2.2', RouterLink: null, Childs: null, IsChildVisible: false}
            ]
          }
        ], IsChildVisible: false
      },
      {
        Label: 'Relatórios', Icon: 'fa-chart-bar', RouterLink: '/main/contactus', Childs: null, IsChildVisible: false
      },


    ];
  }
}
