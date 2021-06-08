// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');




function entreemcontato()
{
	//gtag('event','entre_em_contato', {'event_category':'menu','event_label':'link_externo','value':1});
	ga('send', {
		hitType: 'event',
		eventCategory: 'menu',
		eventAction: 'entre_em_contato',
		eventLabel: 'link_externo'
	});
}

function download()
{
	gtag('event','download_pdf', {'event_category':'menu','event_label':'download_pdf','value':2});
}

function montadoras(x)
{
	
	if (x == 'loren') gtag('event','ver_mais', {'event_category':'analise','event_label':'Loren','value':3});
	if (x == 'ipsum') gtag('event','ver_mais', {'event_category':'analise','event_label':'Ipsum','value':4});
	if (x == 'dolor') gtag('event','ver_mais', {'event_category':'analise','event_label':'Dolor','value':5});
	
}

function emailinput(x)
{
	
	gtag('event', x, {'event_category':'contato','event_label':'preencheu','value':6});

	
}

function emailsubmit()
{
	
	gtag('event', 'enviado', {'event_category':'contato','event_label':'enviado','value':7});

	
}