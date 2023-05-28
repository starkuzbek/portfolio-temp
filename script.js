fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(rasm =>{
    // 1111
      const rasmcha = document.createElement('div')
      rasmcha.innerHTML = `<img src="${rasm[1000].url}">`
      document.querySelector('.main').appendChild(rasmcha)

    //   222
    const rasmcha1 = document.createElement('div')
      rasmcha1.innerHTML = `<img src="${rasm[100].url}">`
      document.querySelector('.main2').appendChild(rasmcha1)

      // 3333
      const rasmcha3 = document.createElement('div')
      rasmcha3.innerHTML = `<img src="${rasm[200].url}">`
      document.querySelector('.main3').appendChild(rasmcha3)
  
    // 444
    const rasmcha4 = document.createElement('div')
    rasmcha4.innerHTML = `<img src="${rasm[300].url}">`
    document.querySelector('.main4').appendChild(rasmcha4)

    // 55555
    const rasmcha5 = document.createElement('div')
    rasmcha5.innerHTML = `<img src="${rasm[500].url}">`
    document.querySelector('.main5').appendChild(rasmcha5)

    // 66666
    const rasmcha6 = document.createElement('div')
    rasmcha6.innerHTML = `<img src="${rasm[700].url}">`
    document.querySelector('.main6').appendChild(rasmcha6)

    // 77777777
    const rasmcha7 = document.createElement('div')
    rasmcha7.innerHTML = `<img src="${rasm[800].url}">`
    document.querySelector('.main7').appendChild(rasmcha7)

    // 88888
    const rasmcha8 = document.createElement('div')
    rasmcha8.innerHTML = `<img src="${rasm[900].url}">`
    document.querySelector('.main8').appendChild(rasmcha8)

    // 99999
    const rasmcha9 = document.createElement('div')
    rasmcha9.innerHTML = `<img src="${rasm[2347].url}">`
    document.querySelector('.main9').appendChild(rasmcha9)

    // 101010
    const rasmcha10 = document.createElement('div')
    rasmcha10.innerHTML = `<img src="${rasm[3147].url}">`
    document.querySelector('.main10').appendChild(rasmcha10)

     })



fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(ism => {

        // 1111
        const login = document.createElement('div')
        login.innerHTML = ism[0].name
        document.querySelector('.data-ism').appendChild(login)
        let adres = document.createElement('p')
        adres.innerHTML = ism[0].address.city
        document.querySelector('.data-adres').appendChild(adres)

        // 2222
        const login1 = document.createElement('div')
        login1.innerHTML = ism[1].name
        document.querySelector('.data-ism2').appendChild(login1)
        let adres1 = document.createElement('p')
        adres1.innerHTML = ism[1].address.city
        document.querySelector('.data-adres2').appendChild(adres1)

        // 3333
        const login3 = document.createElement('div')
        login3.innerHTML = ism[2].name
        document.querySelector('.data-ism3').appendChild(login3)
        let adres3 = document.createElement('p')
        adres3.innerHTML = ism[2].address.city
        document.querySelector('.data-adres3').appendChild(adres3)

        // 44444
        const login4 = document.createElement('div')
        login4.innerHTML = ism[4].name
        document.querySelector('.data-ism4').appendChild(login4)
        let adres4 = document.createElement('p')
        adres4.innerHTML = ism[4].address.city
        document.querySelector('.data-adres4').appendChild(adres4)

        // 5555
        const login5 = document.createElement('div')
        login5.innerHTML = ism[5].name
        document.querySelector('.data-ism5').appendChild(login5)
        let adres5 = document.createElement('p')
        adres5.innerHTML = ism[5].address.city
        document.querySelector('.data-adres5').appendChild(adres5)

        // 6666
        const login6 = document.createElement('div')
        login6.innerHTML = ism[6].name
        document.querySelector('.data-ism6').appendChild(login6)
        let adres6 = document.createElement('p')
        adres6.innerHTML = ism[6].address.city
        document.querySelector('.data-adres6').appendChild(adres6)

        // 777777
        const login7 = document.createElement('div')
        login7.innerHTML = ism[7].name
        document.querySelector('.data-ism7').appendChild(login7)
        let adres7 = document.createElement('p')
        adres7.innerHTML = ism[7].address.city
        document.querySelector('.data-adres7').appendChild(adres7)

        // 88888

        const login8 = document.createElement('div')
        login8.innerHTML = ism[1].name
        document.querySelector('.data-ism8').appendChild(login8)
        let adres8 = document.createElement('p')
        adres8.innerHTML = ism[8].address.city
        document.querySelector('.data-adres8').appendChild(adres8)

        // 99999
        const login9 = document.createElement('div')
        login9.innerHTML = ism[9].name
        document.querySelector('.data-ism9').appendChild(login9)
        let adres9 = document.createElement('p')
        adres9.innerHTML = ism[9].address.city
        document.querySelector('.data-adres9').appendChild(adres9)

        // 10101010
        const login10 = document.createElement('div')
        login10.innerHTML = ism[2].name
        document.querySelector('.data-ism10').appendChild(login10)
        let adres10 = document.createElement('p')
        adres10.innerHTML = ism[3].address.city
        document.querySelector('.data-adres10').appendChild(adres10)
       })




      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(post =>{

        // 1111
        const postdat = document.createElement('p')
        postdat.innerHTML =post[0].title
        document.querySelector('.data-title').appendChild(postdat)

        const postbody = document.createElement('p')
        postbody.className = 'postbody'
        postbody.innerHTML =post[0].body + `<p>30.01.2023<p/>`
        document.querySelector('.data-body').appendChild(postbody)


        // 2222

         const postdat1 = document.createElement('p')
        postdat1.innerHTML =post[1].title
        document.querySelector('.data-title2').appendChild(postdat1)

        const postbody1 = document.createElement('p')
        postbody1.className = 'postbody1'
        postbody1.innerHTML =post[1].body + `<p>5.02.2023<p/>`
        document.querySelector('.data-body2').appendChild(postbody1)

        // 333
        const postdat3 = document.createElement('p')
        postdat3.innerHTML =post[2].title
        document.querySelector('.data-title3').appendChild(postdat3)

        const postbody3 = document.createElement('p')
        postbody3.className = 'postbody3'
        postbody3.innerHTML =post[2].body + `<p>2.12.2021<p/>`
        document.querySelector('.data-body3').appendChild(postbody3)

        // 4444
        const postdat4 = document.createElement('p')
        postdat4.innerHTML =post[4].title
        document.querySelector('.data-title4').appendChild(postdat4)

        const postbody4 = document.createElement('p')
        postbody4.className = 'postbody4'
        postbody4.innerHTML =post[3].body + `<p>8.11.2022<p/>`
        document.querySelector('.data-body4').appendChild(postbody4)

        // 5555
        const postdat5 = document.createElement('p')
        postdat5.innerHTML =post[5].title
        document.querySelector('.data-title5').appendChild(postdat5)

        const postbody5 = document.createElement('p')
        postbody5.className = 'postbody5'
        postbody5.innerHTML =post[5].body + `<p>16.08.2023<p/>`
        document.querySelector('.data-body5').appendChild(postbody5)

        // 666
        const postdat6 = document.createElement('p')
        postdat6.innerHTML =post[6].title
        document.querySelector('.data-title6').appendChild(postdat6)

        const postbody6 = document.createElement('p')
        postbody6.className = 'postbody6'
        postbody6.innerHTML =post[6].body + `<p>3.02.2020<p/>`
        document.querySelector('.data-body6').appendChild(postbody6)

        // 7777777

        const postdat7 = document.createElement('p')
        postdat7.innerHTML =post[7].title
        document.querySelector('.data-title7').appendChild(postdat6)

        const postbody7 = document.createElement('p')
        postbody7.className = 'postbody7'
        postbody7.innerHTML =post[7].body + `<p>10.01.2017<p/>`
        document.querySelector('.data-body7').appendChild(postbody7)

        // 88888
        const postdat8 = document.createElement('p')
        postdat8.innerHTML =post[8].title
        document.querySelector('.data-title8').appendChild(postdat8)

        const postbody8 = document.createElement('p')
        postbody8.className = 'postbody8'
        postbody8.innerHTML =post[8].body + `<p>13.07.2020<p/>`
        document.querySelector('.data-body8').appendChild(postbody8)

        // 99999
        const postdat9 = document.createElement('p')
        postdat9.innerHTML =post[9].title
        document.querySelector('.data-title9').appendChild(postdat9)

        const postbody9 = document.createElement('p')
        postbody9.className = 'postbody9'
        postbody9.innerHTML =post[9].body + `<p>3.02.2020<p/>`
        document.querySelector('.data-body9').appendChild(postbody9)

        // 10101010
        const postdat10 = document.createElement('p')
        postdat10.innerHTML =post[10].title
        document.querySelector('.data-title10').appendChild(postdat10)

        const postbody10 = document.createElement('p')
        postbody10.className = 'postbody10'
        postbody10.innerHTML =post[10].body + `<p>31.10.2021<p/>`
        document.querySelector('.data-body10').appendChild(postbody10)

      })