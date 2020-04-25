class Github{
    constructor(){
        this.client_id ='3ed29a417d0012ffdcdc';
        this.client_secret = 'e5e545c272fd1f80a55a5ca0515e550976ecffca';
        this.repo_count = 4;
    }

    async  getRepo(userText){
        const repoResponse = await fetch(`https://api.github.com/search/repositories?q=${userText}&client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repo_count}`);
        
        const repo = await repoResponse.json();
        
        return repo.items;
    }
}

