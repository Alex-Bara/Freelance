const UPDATE_TITLE = 'UPDATE-TITLE';
const UPDATE_TEXT = 'UPDATE-TEXT';
const ADD_WORK = 'ADD-WORK';
let id = 0;
let defaultState = {
  findWork: {
    jobs: [
      {
      id: id,
      title: <button><span className="item-title">Заголовок</span></button>,
      info: <div className="item-info">Информация о цене и т.д.</div>,
      text: <div className="item-text">Описание задания</div>,
      skills: <div className="item-skills">
              <span className="skill">css</span>
              <span className="skill">html5</span>
              <span className="skill">javascript</span>
            </div>
      },
    ],
  },
  projectCreate:{
    title: '',
    text: '',
  }
};

export const projectCreateReducer = (state = defaultState, action) => {

  let stateCopy = {
    ...state,
    projectCreate: {...state.projectCreate},
    findWork: {...state.findWork, jobs: [...state.findWork.jobs]},
  };

  switch (action.type){
    case UPDATE_TITLE:{
      stateCopy.projectCreate.title = action.title;
      return stateCopy;
    }
    case UPDATE_TEXT:{
      stateCopy.projectCreate.text = action.text;
      return stateCopy;
    }
    case ADD_WORK:{
        stateCopy.findWork.jobs.push({
          id: ++id,
          title: <button><span className="item-title">{action.values.title}</span></button>,
          info: '',
          text: <div className="item-text">{action.values.text}</div>,
          skills: <div className="item-skills">
            {action.values.css? <span className="skill">css</span> : null}
            {action.values.html? <span className="skill">html</span> : null}
            {action.values.javascript? <span className="skill">javascript</span> : null}
          </div>
        });
      return stateCopy;
    }
    default:{
      return state;
    }
  }
}

export const updateTitle = (title) => ({type: UPDATE_TITLE, title});
export const updateText = (text) => ({type: UPDATE_TEXT, text});
export const addWork = (values) => ({type: ADD_WORK , values});

export default projectCreateReducer;