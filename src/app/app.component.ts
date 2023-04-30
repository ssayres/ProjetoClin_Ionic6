import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: ' Agendamentos 📅 ', url: '/agendamento', icon:'' },
    { title: ' Especialidade 🩺', url: '/especialidade', icon: '' },
    { title: 'Clínicas próximas 📌', url: '/local', icon: '' },
    { title: 'Apagar registro 🗑️', url: '/apagar', icon: '' },
    { title: 'Nos Avalie ⭐', url: 'avaliar', icon: '' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public isLoginPage = false;
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isLoginPage = (val.url === '/login' || val.url === '/home' || val.urlAfterRedirects === '/login');
      }
    });
    {
      
    };

  }
  logout() {
    this.router.navigate(['/login']);
  }
}
