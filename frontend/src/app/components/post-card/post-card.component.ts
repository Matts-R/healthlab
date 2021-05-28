import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  public posts: Array<any> = [
    {
      id: 2,
      titulo: 'Os efeitos da quarentena na saúde mental',
      texto: `A saúde mental em tempos de pandemia é uma preocupação constante. Foram documentados em todo o mundo aumento de ansiedade, depressão, estresse e até pensamento suicida associados à quarentena por Covid-19.

      Um artigo publicado recentemente no JAMA propôs estudar os fatores de risco para esses efeitos psicológicos, avaliando estudantes universitários na França confinados à quarentena.
A saúde mental em tempos de pandemia é uma preocupação constante. Foram documentados em todo o mundo aumento de ansiedade, depressão, estresse e até pensamento suicida associados à quarentena por Covid-19.

Um artigo publicado recentemente no JAMA propôs estudar os fatores de risco para esses efeitos psicológicos, avaliando estudantes universitários na França confinados à quarentena.

Uma das limitações do estudo que deve ser ressaltada é que embora o número de entrevistados seja grande, representa 4,3% dos alunos contatados e o viés de autosseleção pode ter alterado os resultados.

Identificar os fatores que aumentam a vulnerabilidade dos indivíduos durante a quarentena pode ser uma ferramenta útil para nos ajudar a recomendar abordagens específicas para mitigar a angústia e talvez melhorar o cumprimento das medidas de prevenção ao Covid-19.

Dentre estas, podemos ressaltar, com base no estudo, estimular atividades físicas, estreitar laços sociais e melhorar a qualidade das informações disponíveis.


`,
      criado_em: '15/05/2021',
    },
  ];

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {}

  private formatDate(date: string): string {
    let dateArr = date.substr(0, 10).split('-');
    let dateFormatted = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
    return dateFormatted;
  }

  redirectToRead() {
    this.router.navigate(['ler']);
  }
}
