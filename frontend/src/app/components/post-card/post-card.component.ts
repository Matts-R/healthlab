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
      id: 0,
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
    {
      id: 1,
      titulo: 'A importância da atividade física para a saúde e qualidade de vida',
      texto: `Sendo o ser humano biopsicossocial, não é possível desprezar a importância da obtenção de conhecimentos na área da saúde mental e da qualidade de vida, para que se possa compreender os efeitos da atividade física sobre o homem.
        Os objetivos deste trabalho foram: analisar o conceito de saúde de alunos, professores e funcionários da comunidade da UFMG e verificar o nível de importância dos motivos para a prática regular de atividade física. 
        Participaram do estudo 574 indivíduos da comunidade da UFMG. O questionário utilizado para a coleta de dados foi desenvolvido e validado no Laboratório de Psicologia do Esporte (LAPES-UFMG). 
        Os procedimentos realizados para o tratamento estatístico foram: uma análise descritiva exploratória composta por procedimentos de compara­ção de médias entre os grupos gênero, ocupação e unidade/departamento.
        No geral, o termo mais relacionado com a palavra saúde foi "alimentação". Vários termos apresentaram uma diferença estatisticamente significativa entre alunos, professores e funcionários, entre eles"status social" (p<0.01) e ",satisfação profissional" (p <0.001).
        O motivo geral mais importante para a prática regular de atividade física foi o “prazer pela atividade física". Foram detectadas várias diferenças significativas entre géneros, departamentos e ocupação, entre elas "prevenir doenças " (p < 0.001) e “retardar 0 envelhecimento" (p < 0.05).
        Concluiu- se que motivos tais como saúde, qualidade de vida e prazer foram muito relevantes para a amostra de uma forma geral, 0 que vem a comprovar a importância que a atividade física regular tem para a saúde e a qualidade de vida e 0 fato de que as pessoas estão conscientes desta importância. 
        O conceito de saúde encontra- se muito relacionado à saúde física. condicionamento físico, atividade física e bem-estar físico apareceram com altos níveis de relevância para esta amostra avaliada. Para estas pessoas a saúde é beneficiada pela prática regular de atividades físicas, então podemos dizer que os benefícios que estas pessoas conhecem que esta prática pode proporcionar a elas são benefícios de caráter físico.
      `,
      criado_em: '09/06/2021',
    },
    {
      id: 2,
      titulo: 'Alimentação saudável no ambiente de trabalho: é possível?',
      texto: `Segundo um estudo da Organização Internacional do Trabalho, as refeições saudáveis consumidas em um ambiente limpo e tranquilo não devem ser encaradas como luxo e/ou capricho, mas que, pelo contrário, são fundamentais para o humor, a saúde, a segurança e a eficácia dos trabalhadores. De acordo com dados da Organização Mundial da Saúde (OMS), 20% dos funcionários podem elevar sua produtividade seguindo uma alimentação saudável. Para que você possa manter um bem-estar físico e mental e elevar o seu desempenho laboral com mais eficácia e disposição, a equipe da Coordenação Técnica de Nutrição do IFF/Fiocruz, composta pelas nutricionistas: Vivian Lima, Samira Fernandes, Jéssica Val e Luísa Cunha dá dicas importantes.

      É possível ter uma alimentação saudável no trabalho?
      
      Geralmente, passamos grande parte do dia no local de trabalho, por isso, os hábitos de vida saudáveis durante esse período devem ser valorizados, dentre eles, as práticas alimentares. Longos períodos sem se alimentar, substituição de refeições principais por lanches e o consumo de produtos ultraprocessados são atitudes rotineiras, mas que devem ser evitadas. Apesar da correria diária, podemos utilizar estratégias que facilitem a alimentação saudável.
      
      Quais são os hábitos alimentares que devem ser incentivados entre os trabalhadores?
      
      No momento das grandes refeições, independentemente de trazer a refeição de casa ou comer no restaurante do local de trabalho, o ideal é dar preferência às carnes magras, legumes, verduras e cereais integrais, evitando o consumo de alimentos fritos e muito gordurosos. Em relação aos lanches, boas opções são frutas, laticínios com reduzido teor de gordura e oleaginosas (castanhas, nozes, avelãs, amêndoas etc.), exemplos que podem ser colocados em prática diariamente. Esses alimentos são ricos em fibras, vitaminas, sais minerais e nutrientes antioxidantes que contribuem para prevenção de doenças crônicas não transmissíveis, melhoram o sistema imunológico, ajudam no combate aos radicais livres e previnem o envelhecimento precoce.
      
      O que uma alimentação saudável traz de benefícios aos trabalhadores?
      
      Práticas alimentares saudáveis no ambiente de trabalho trazem benefícios tanto para a instituição quanto para o colaborador, tais como: menores taxas de absenteísmo por adoecimento, mais disposição, melhor rendimento nas atividades ao longo do dia e melhora na qualidade de vida. Outro hábito saudável e tão importante quanto a boa alimentação é a prática de atividades físicas, orientada por um profissional da área. Essas medidas associadas contribuem para que o trabalhador tenha uma rotina mais saudável dentro e fora do ambiente de trabalho.
      
      O que fazer para manter a ingestão de líquido durante a jornada de trabalho?
      
      Não devemos esquecer, é claro, do consumo de água que é bastante negligenciado ao longo do dia. Para isso, ter uma garrafa sempre próxima ou até mesmo usar aplicativos de celulares que nos ajudem a lembrar de beber água são ótimas dicas para aumentar ingestão hídrica no dia a dia.
      `,
      criado_em: '10/06/2021',
    },
  ];

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {}

  private formatDate(date: string): string {
    let dateArr = date.substr(0, 10).split('-');
    let dateFormatted = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
    return dateFormatted;
  }

  redirectToRead(post: any) {
    this.router.navigate(['ler', post.id]);
  }
}
