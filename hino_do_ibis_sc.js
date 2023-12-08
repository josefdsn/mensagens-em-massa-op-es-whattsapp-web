async function sendScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

sendscript(`
Vamos meu Íbis pra luta
E em qualquer disputa
Estaremos ao seu lado
Juro por Deus, eu prometo
Que o pássaro preto
Vai dar tudo no gramado

Nossa torcida é fiel e organizada
Na geral e arquibancada
Vai vibrar de emoção
Quem espera sempre alcança
A nossa esperança
É ver o Íbis campeão

Nossa galera da poeira e do asfalto
Quer ver o pássaro preto
Voando sempre mais alto
Somos unidos e queremos prosperar
Nosso lema é competir
Ver o Íbis triunfar
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
