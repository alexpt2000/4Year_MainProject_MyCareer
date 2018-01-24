import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { JobswebFilter, JobswebService } from './../jobsweb.service';

@Component({
  selector: 'app-jobsweb-search',
  templateUrl: './jobsweb-search.component.html',
  styleUrls: ['./jobsweb-search.component.css']
})
export class JobswebSearchComponent implements OnInit {

  totalRegistros = 0;
  filtro = new JobswebFilter();
  jobsweb = [];
  @ViewChild('tabela') grid;

  constructor(
    private jobswebService: JobswebService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private toasty: ToastyService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de pessoas');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.jobswebService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.jobsweb = resultado.jobsweb;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }


}
