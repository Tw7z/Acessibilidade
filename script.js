        document.addEventListener('DOMContentLoaded', function(){
            const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
            const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
         
            botaoDeAcessibilidade.addEventListener('click', function (){
                botaoDeAcessibilidade.classList.toggle('rotacao-botao');
                opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
         
                const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
                botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
            })
         
            const aumentaFonteBotao = document.getElementById('aumentar-fonte');
            const diminuiFonteBotao = document.getElementById('diminuir-fonte');
            const alternaContraste = document.getElementById('alterna-contraste')
         
            let tamanhoAtualFonte = 1;
         
            aumentaFonteBotao.addEventListener('click', function(){
                if (tamanhoAtualFonte < 1.3) {
                    tamanhoAtualFonte += 0.1;
                    document.body.style.fontSize = `${tamanhoAtualFonte}rem`
                }
            })
         
            diminuiFonteBotao.addEventListener('click', function(){
                if (tamanhoAtualFonte > 0.8) {
                    tamanhoAtualFonte -= 0.1;
                    document.body.style.fontSize = `${tamanhoAtualFonte}rem`
                }
            })
         
            alternaContraste.addEventListener('click', function(){
                document.body.classList.toggle('alto-contraste')
            })
         
            document.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    aumentaFonteBotao.click();
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    diminuiFonteBotao.click();
                } else if (e.key === 'c' || e.key === 'C') {
                    e.preventDefault();
                    alternaContraste.click();
                }
            });

            window.addEventListener('scroll', function() {
                const header = document.getElementById('mainHeader');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }

                const sections = document.querySelectorAll('section');
                sections.forEach(section => {
                    const sectionTop = section.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    if (sectionTop < windowHeight * 0.75) {
                        section.classList.add('visible');
                    }
                });

                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                document.getElementById("myProgressBar").style.width = scrolled + "%";
            });

            const scroll = new SmoothScroll('a[href*="#"]', {
                speed: 800,
                speedAsDuration: true
            });
        });
