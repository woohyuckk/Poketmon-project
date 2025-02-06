---
## 나만의 포켓몬 프로젝트



---
## 주요 기능
### 🌟 나만의 포켓몬 (6개) 선택 가능 및 상세 포켓몬 세부내용 페이지 제공


---
## Directory 구조 / branch - prop-driling, context, redux

```
📦 src
├─ assets
│  ├─ poketball.png
│  └─ Pokemontitle.svg
├─ component
│  ├─ Dashboard.jsx   : 내가 고른 포켓몬이 표시될 UI
│  ├─ PokemonCard.jsx : 포켓몬리스트에 보여질 포켓몬 UI
│  └─ PokemonList.jsx : 포켓몬들의 목록을 볼 수 있는 UI 컴포넌트
├─ ---------- context ----------------
├─ context
│  └─ PokemonContext.jsx  : myPokemon 상태 변수 전역 관리
├─ ---------- redux ------------------
store   :   myPokemon 상태 변수 전역 관리
│  ├─ myPokemonSlice.js
│  └─ store.js
├─ pages
│  ├─ Detail.jsx  : 포켓몬들의 상세정보 
│  ├─ Dex.jsx     : 포켓몬들을 선택/취소 
│  └─ Home.jsx    : 메인 Title
├─ style
│  └─ style.js    : 전역스타일 설정
├─ utils
│  └─ mokdata.js  : 포켓몬 데이터 
└─ App.jsx
```

https://poketmon-project-r5dbfjp2w-woohyucks-projects.vercel.app/

