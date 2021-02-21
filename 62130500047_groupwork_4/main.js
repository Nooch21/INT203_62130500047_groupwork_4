    const app = {
        data() {
            return {
                msg: 'Hello & Welcome, Vue3',
                photos: [{
                        src: './images/Arrival_Taeil.jpeg',
                        title: 'NCT - Taeil',
                        favor: false,
                        like: 0,
                        number: "1"
                    },
                    {
                        src: './images/Arrival_Johnny.jpeg',
                        title: 'NCT - Johnny',
                        favor: false,
                        like: 0,
                        number: "2"
                    },
                    {
                        src: './images/Arrival_Taeyong.jpeg',
                        title: 'NCT - Taeyong',
                        favor: false,
                        like: 0,
                        number: "3"
                    },
                    {
                        src: './images/Arrival_Yuta.jpeg',
                        title: 'NCT - Yuta',
                        favor: false,
                        like: 0,
                        number: "4"
                    },
                    {
                        src: './images/Arrival_Kun.jpeg',
                        title: 'NCT - Kun',
                        favor: false,
                        like: 0,
                        number: "5"
                    },
                    {
                        src: './images/Arrival_Doyoung.jpeg',
                        title: 'NCT - Doyoung',
                        favor: false,
                        like: 0,
                        number: "6"
                    },
                    {
                        src: './images/Arrival_Ten.jpeg',
                        title: 'NCT - Ten',
                        favor: false,
                        like: 0,
                        number: "7"
                    },
                    {
                        src: './images/Arrival_Jaehyun.jpeg',
                        title: 'NCT - Jaehyun',
                        favor: false,
                        like: 0,
                        number: "8"
                    },
                    {
                        src: './images/Arrival_Winwin.jpeg',
                        title: 'NCT - Winwin',
                        favor: false,
                        like: 0,
                        number: "9"
                    },
                    {
                        src: './images/Arrival_Jungwoo.jpeg',
                        title: 'NCT - Jungwoo',
                        favor: false,
                        like: 0,
                        number: "10"
                    },
                    {
                        src: './images/Arrival_Lucas.jpeg',
                        title: 'NCT - Lucas',
                        favor: false,
                        like: 0,
                        number: "11"
                    },
                    {
                        src: './images/Arrival_Mark.jpeg',
                        title: 'NCT - Mark',
                        favor: false,
                        like: 0,
                        number: "12"
                    },
                    {
                        src: './images/Arrival_Xiaojun.jpeg',
                        title: 'NCT - Xiaojun',
                        favor: false,
                        like: 0,
                        number: "13"
                    },
                    {
                        src: './images/Arrival_Hendery.jpeg',
                        title: 'NCT - Hendery',
                        favor: false,
                        like: 0,
                        number: "14"
                    },
                    {
                        src: './images/Arrival_Renjun.jpeg',
                        title: 'NCT - Renjun',
                        favor: false,
                        like: 0,
                        number: "15"
                    },
                    {
                        src: './images/Arrival_Jeno.jpeg',
                        title: 'NCT - Jeno',
                        favor: false,
                        like: 0,
                        number: "16"
                    },
                    {
                        src: './images/Arrival_Haechan.jpeg',
                        title: 'NCT - Haechan',
                        favor: false,
                        like: 0,
                        number: "17"
                    },
                    {
                        src: './images/Arrival_Jaemin.jpeg',
                        title: 'NCT - Jaemin',
                        favor: false,
                        like: 0,
                        number: "18"
                    },
                    {
                        src: './images/Arrival_Yangyang.jpeg',
                        title: 'NCT - Yangyang',
                        favor: false,
                        like: 0,
                        number: "19"
                    },
                    {
                        src: './images/Arrival_Shotaro.jpeg',
                        title: 'NCT - Shotaro',
                        favor: false,
                        like: 0,
                        number: "20"
                    },
                    {
                        src: './images/Arrival_Sungchan.jpeg',
                        title: 'NCT - Sungchan',
                        favor: false,
                        like: 0,
                        number: "21"
                    },
                    {
                        src: './images/Arrival_Chenle.jpeg',
                        title: 'NCT - Chenle',
                        favor: false,
                        like: 0,
                        number: "22"
                    },
                    {
                        src: './images/Arrival_Jisung.jpeg',
                        title: 'NCT - Jisung',
                        favor: false,
                        like: 0,
                        number: "23"
                    }
                ],
                shown: true,
                inputSearch: '',
                displayPhoto: false,
                srcPhoto: ''
            }
        },
        methods: {
            favor(index) {
                this.photos[index].favor = !this.photos[index].favor;
                this.photos[index].like++
            },
            clickIconSearch(index) {
                this.shown = false
            },
            clickCancelBtn(index) {
                this.shown = true
            },
            search() {
                this.inputSearch = '';
            },
            showPhoto(photo) {
                this.srcPhoto = this.photos[photo.number - 1].src;
                this.displayPhoto = true;
            },
            closePhoto() {
                this.srcPhoto = '';
                this.displayPhoto = false;
            }

        },
        computed: {
            countPhotos() {
                return this.photos.length
            },
            searchPhoto() {
                return this.photos.filter((s) => {
                    return s.title.toLowerCase().includes(this.inputSearch.toLowerCase());
                });
            }
        }


    }
    mountedApp = Vue.createApp(app).mount('#app')