async function EnviarScript(scriptText){
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

Enviarcript(`
Vamos todos cantar de coração
A cruz de malta é o meu pendão
Tu tens um nome do heróico Português
Vasco da Gama, a tua fama assim se fez
Tua imensa torcida é bem feliz
Norte-Sul, norte-sul deste Brasil
Tua estrela, na Terra a brilhar Ilumina o mar
No atletismo és um braço
No remo és imortal
No futebol és o traço
De união Brasil-Portugal
No atletismo és um braço
No remo és imortal
No futebol és o traço
De união Brasil-Portugal
Vamos todos cantar de coração
A cruz de malta é o meu pendão
Tu tens um nome do heróico Português
Vasco da Gama, a tua fama assim se fez
Tua imensa torcida é bem feliz
Norte-Sul, norte-sul deste Brasil
Tua estrela, na Terra a brilhar Ilumina o mar
No atletismo és um braço
No remo és imortal
No futebol és o traço
De união Brasil-Portugal
No atletismo és um braço
No remo és imortal
No futebol és o traço
De união Brasil-Portugal
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
