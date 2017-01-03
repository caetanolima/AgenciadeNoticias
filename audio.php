<?php include '_header.php'; ?>

<section class="page-audio">
	
	<header>
		<h1><i class="ia ia-audio-outline"></i> Rádio</h1>
		<p>
			<button class="button-news-notification" type="button">
				<i class="ia ia-bell"></i> Seja avisado de novas publicações
			</button>
		</p>
	</header>

	<div class="container">

		<div class="row">
			<div class="col-md-8">

				<aside class="list-audios">
					<article class="item item-highlight">
						<span class="icon-player">
							<i class="fa fa-play-circle"></i>
						</span>
						<h2><a href="">Limpeza e terraplanagem marcam início da duplicação da BR-277 em Cascavel, no Oeste</a></h2>
						<audio controls="" preload="auto">
							<source src="http://www.aen.pr.gov.br/modules/debaser/upload/899968PARANA_VAI_TER_7_BILHOES.mp3" type="audio/mpeg">
							<div class="alert alert-danger text-center">
								<span class="fa-stack fa-5x">
									<i class="fa fa-volume-up fa-stack-1x"></i>
									<i class="fa fa-ban fa-stack-2x"></i>
								</span>
								<p><strong>Seu navegador não suporta a reprodução de áudio usando html5.</strong></p>
								<p>
									<a href="http://www.aen.pr.gov.br/modules/debaser/upload/899968PARANA_VAI_TER_7_BILHOES.mp3"> Clique aqui</a> e faça o download do áudio e atualize seu navegador.
								</p>
							</div>
						</audio>
					</article>

					<?php
						$audios = array(
							"Movimentação de cargas no Porto de Antonina, no Litoral do Estado, aumenta 94% neste ano",
							"Balé Teatro Guaíra se apresenta neste domingo no Hospital Psiquiátrico San Julian, em Piraquara, na Região Metropolitana de Curitiba",
							"Procuradoria-Geral do Estado reforça apelo para que Judiciário determine desocupação de escolas",
							"Estado realiza mutirão de consultas oftalmológicas no Sudoeste até esta quinta-feira",
							"Audiências públicas para revisão da lei de Zoneamento e Gestão Ambiental da Ilha do Mel vão ser feitas com entidades do Litoral do Paraná",
							"Tradição exportadora coloca Paraná como líder do País em sete produtos nos primeiros nove meses deste ano",
							"Copel completa 62 anos como melhor empresa de energia da América Latina",
							"Obras da passarela na Rodovia Carlos João Strass, em Londrina, entram na fase final",
							"Consumidor deve ficar atento a vazamentos de água dentro do imóvel"
						);
					?>
					<?php foreach ($audios as $a): ?>
					<article class="item">
						<div class="row">
							<div class="col-sm-1 col-xs-2">
								<i class="fa fa-volume-up"></i>
								<em>2:32</em>
							</div>
							<div class="col-sm-11 col-xs-10">
								<div class="row">
									<div class="col-sm-9">
										<h2><a href=""><?php echo $a; ?></a></h2>
									</div>
									<div class="col-sm-3">
										<time datetime="2017-12-12">26 mar 2016 - 2:20</time>
									</div>
								</div>
							</div>
						</div>
					</article>
					<?php endforeach ?>

				</aside>

				<div class="load-more">
					<div class="icon-loading">
						<svg class="hourglass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 206" preserveAspectRatio="none">
							<path class="middle" d="M120 0H0v206h120V0zM77.1 133.2C87.5 140.9 92 145 92 152.6V178H28v-25.4c0-7.6 4.5-11.7 14.9-19.4 6-4.5 13-9.6 17.1-17 4.1 7.4 11.1 12.6 17.1 17zM60 89.7c-4.1-7.3-11.1-12.5-17.1-17C32.5 65.1 28 61 28 53.4V28h64v25.4c0 7.6-4.5 11.7-14.9 19.4-6 4.4-13 9.6-17.1 16.9z"/>
							<path class="outer" d="M93.7 95.3c10.5-7.7 26.3-19.4 26.3-41.9V0H0v53.4c0 22.5 15.8 34.2 26.3 41.9 3 2.2 7.9 5.8 9 7.7-1.1 1.9-6 5.5-9 7.7C15.8 118.4 0 130.1 0 152.6V206h120v-53.4c0-22.5-15.8-34.2-26.3-41.9-3-2.2-7.9-5.8-9-7.7 1.1-2 6-5.5 9-7.7zM70.6 103c0 18 35.4 21.8 35.4 49.6V192H14v-39.4c0-27.9 35.4-31.6 35.4-49.6S14 81.2 14 53.4V14h92v39.4C106 81.2 70.6 85 70.6 103z"/>
						</svg>
						<span>Carregando mais áudios</span>
					</div>
					<p>
						<button class="button-load-more">Mostrar mais áudios</button>
					</p>
					<a href="" class="link-green">
						Arquivo de áudios <i class="fa fa-angle-right"></i>
					</a>
				</div>

			</div>

			<div class="col-md-4 col-lg-3 col-lg-offset-1">
				<div class="sidebar-audios">

					<button class="button-news-notification" type="button">
						<i class="ia ia-bell"></i> Seja avisado de novas publicações
					</button>

					<dl class="widget-highlight-sidebar">
						<dt>
							<img src="_assets/images/fake/fake-parana.png" alt="Paraná em Destaque">
						</dt>
						<dd>
							<ul>
								<li>
									<h3>
										<i class="fa fa-volume-up"></i>
										<a href="">Programa Paraná em Destaque • 04 nov 2016</a>
									</h3>
								</li>
								<li>
									<h3>
										<i class="fa fa-volume-up"></i>
										<a href="">Programa Paraná em Destaque • 04 nov 2016</a>
									</h3>
								</li>
								<li>
									<h3>
										<i class="fa fa-volume-up"></i>
										<a href="">Programa Paraná em Destaque • 04 nov 2016</a>
									</h3>
								</li>
							</ul>
						</dd>
					</dl>

					<?php
						$ouvidos = array(
							"Sanepar conclui perfuração de mais dois poços em Nova Esperança",
							"Entidades científicas premiam Paraná por pioneirismo",
							"Dráuzio Varella apoia a vacinação contra a dengue no Paraná",
							"Autoridades internacionais destacam importância da vacinação contra a dengue",
							"Sanepar conclui perfuração de mais dois poços em Nova Esperança "
						);
					?>
					<dl class="widget-most-rated">
						<dt>Mais Ouvidos</dt>
						<dd>
							<ul>
								<?php foreach ($ouvidos as $key => $item): ?>
								<li data-number="<?php echo ($key+1); ?>"><a href=""><?php echo $item ?> <i class="fa fa-volume-up"></i></a></li>
								<?php endforeach ?>
							</ul>
						</dd>
					</dl>

					<div class="sidebar-parana-informa">
						<?php include 'widget-parana-informa.php'; ?>
					</div>

					<?php include 'widget-utimas-noticias.php'; ?>

				</div>
			</div>

		</div>

	</div>

</section>

<?php include '_footer.php'; ?>