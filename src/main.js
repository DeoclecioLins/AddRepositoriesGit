import api from './api';

class App {
    constructor(){
        this.repositories = JSON.parse(localStorage.getItem('list_repository')) || [];

        this.formEl = document.getElementById('repo-form');        
        
        this.excluirEl = document.getElementById('repo-list').querySelectorAll('#repo-excluir');
        
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');
        this.test = [];
        this.render();
        this.registerHandlers();
    }
    delRepo(pos){
        console.log(pos);
        this.repositories.splice(pos,1);
        this.render();
    }          
    registerHandlers(){                
        this.formEl.onsubmit = event => this.addRepositories(event);        
    }    
    setLoading(loading = true){
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id','loading');

            this.formEl.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();
        }
    }
    async addRepositories(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;
        this.setLoading();
        try {

            const reponse = await api.get(`/repos/${repoInput}`);
    
            const {name, description, html_url, owner: {avatar_url}} = reponse.data;
    
            console.log()
    
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });
            this.inputEl.value = '';
    
            this.render();
        }catch (err) {
            alert('O repositório não existe!');

        }
        
        this.setLoading(false);
    }
    render() {
        this.listEl.innerHTML = '';
        
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));
           
            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');            
            linkEl.setAttribute('href', repo.html_url);            
            linkEl.appendChild(document.createTextNode('Acessar'));

            let linkDelEL = document.createElement('a');
            linkDelEL.setAttribute('id','repo-excluir');
            let possicao = this.repositories.indexOf(repo);
            linkDelEL.setAttribute('name','repo-excluir');
            linkDelEL.setAttribute('href','#');
            linkDelEL.appendChild(document.createTextNode('Excluir'));
            
            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);
            listItemEl.appendChild(linkDelEL);

            this.listEl.appendChild(listItemEl);
        });
        this.els = document.querySelectorAll('a[name=repo-excluir]');
        this.els.forEach((elms, index)=>{
            document.querySelectorAll('a[name=repo-excluir]')[index].onclick = 
            () => this.delRepo(index);
        });        
        this.saveToStorage();
    }   
    saveToStorage() {
        localStorage.setItem('list_repository', JSON.stringify(this.repositories));
    }
    
}

new App;


   







