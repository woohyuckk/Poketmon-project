## 나만의 포켓몬 프로젝트
<div align="center">
![Image](https://github.com/user-attachments/assets/96771bed-b33c-44ed-a2ad-d185c1bd8277)
</div>


---
## 주요 기능
### 🌟 나만의 포켓몬 (6개) 선택 가능 및 상세 포켓몬 세부내용 페이지 제공
1. 3개의 Branch(prop-driling, context, redux)를 만들어 3가지 방식으로 구현되었습니다.
2. localStorage를 활용하여 나만의 포켓몬이 저장됩니다.
3. 포켓몬 선택이나 삭제의 알람은 toast를 통해 구현되었습니다.
4. Page간 이동은 Link와 useNavigate를 두가지 다 사용하였습니다.
<div display="gird" grid-template-columns ="repeat(3,1fr)" gap="15px" >
  <img width="300px" src="https://github.com/user-attachments/assets/be0bb665-d008-4ac6-89f7-f3926ad0a691"/>
  <img width="300px" src="https://github.com/user-attachments/assets/88d21ac5-5092-4ae8-aef9-7cff336089ba"/>
  <img width="300px" src="https://github.com/user-attachments/assets/7faba44d-29d6-4914-ac53-877da9899730"/>
</div>

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

