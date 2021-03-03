class Github {
  constructor() {
    this.clientID = "5b2779de79ebe8797c24";
    this.clientSecret = "8e27e534f0ab681f0290732b33328a65ec1b31db";
    this.repos_count = 8;
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`
    );


    const profileData = await profileResponse.json();

    const reposData = await repoResponse.json();

    return {
      profileData,
      reposData
    };
  }
}
