let playlist = [
  "Numb",
  "In The End",
  "Enter Sandman",
  "Fear of the Dark",
  "Breaking the Law",
  "Master of Puppets",
  "The Trooper",
  "Paranoid"
];

let opcao = "";

do {

  opcao = prompt(
    "===== MINHA PLAYLIST =====\n\n" +
    "1 - Pesquisar música\n" +
    "2 - Criar seleção\n" +
    "3 - Remover música\n" +
    "4 - Inserir música\n" +
    "5 - Ordenar A-Z\n" +
    "6 - Inverter playlist\n" +
    "7 - Exibir playlist\n" +
    "0 - Sair\n\n" +
    "Escolha uma opção:"
  );

  switch (opcao) {
    case "1": {

      let musica = prompt("Digite o nome da música para pesquisar:");


      let existe = playlist.includes(musica);

      if (existe) {

        let pos = playlist.indexOf(musica);
        alert(`A música "${musica}" está no sistema!\nPosição (índice): ${pos}`);
      } else {
        alert(`A música "${musica}" NÃO foi encontrada na playlist.`);
      }
      break;
    }

    case "2": {

      let inicio = Number(prompt("Digite a posição inicial da seleção:"));
      let fim = Number(prompt("Digite a posição final da seleção (não inclusiva):"));


      let selecao = playlist.slice(inicio, fim);

      alert(
        `Seleção criada com sucesso!\n` +
        `Músicas na seleção: ${selecao.join(" - ")}`
      );
      break;
    }

    case "3": {

      let pos = Number(prompt("Digite o índice da música que deseja remover:"));

      if (pos >= 0 && pos < playlist.length) {
        let musicaRemovida = playlist[pos];


        playlist.splice(pos, 1);

        alert(`A música "${musicaRemovida}" foi removida com sucesso!`);
      } else {
        alert("Posição inválida!");
      }
      break;
    }

    case "4": {

      let novaMusica = prompt("Digite o nome da nova música:");
      let pos = Number(prompt(`Digite a posição onde deseja inserir "${novaMusica}":`));


      playlist.splice(pos, 0, novaMusica);

      alert(`Música "${novaMusica}" inserida com sucesso na posição ${pos}!`);
      break;
    }

    case "5": {


      playlist.sort();

      alert("Playlist organizada em ordem alfabética (A-Z)!");
      break;
    }

    case "6": {

      playlist.reverse();

      alert("Ordem da playlist invertida!");
      break;
    }

    case "7": {


      let textoExibicao = playlist.join(" | ");

      alert("📜 PLAYLIST ATUAL:\n\n" + textoExibicao);
      break;
    }

    case "0":
      alert("Saindo do gerenciador de playlist... Até logo!");
      break;

    default:
      alert("Opção inválida! Escolha um número de 0 a 7.");
      break;
  }

} while (opcao !== "0");
