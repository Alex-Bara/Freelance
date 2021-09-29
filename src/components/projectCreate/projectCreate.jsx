import React from 'react';
import './css/projectCreate.css';
import {useFormik} from "formik";

const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Поле "Название проекта" обязательно для заполнения!';
    }

    if (!values.text) {
        errors.text = 'Поле "Описание" обязательно для заполнения!';
    } else if (values.text.length < 10) {
        errors.text = 'Описание дожно иметь не менее 10 символов';
    }

    return errors;
};

const ProjectCreate = (props) => {
  // let title = React.createRef();
  // let projectAbout = React.createRef();
  // let price = React.createRef();

  // let onTitleChange = () => {
  //   let titleText = title.current.value;
  //   props.titleChange(titleText);
  // }
  //
  // let onTextChange = () => {
  //   let text = projectAbout.current.value;
  //   props.changeText(text)
  // }

  const formik = useFormik({
    initialValues: {
      title: '',
      text: '',
      css: false,
      javascript: false,
      html: false
    },
    validate,
    onSubmit: values => {
      props.addWork({...values})
    }
  })

  let addJob = () => {
      props.addJob()
  };

  return(
    <div className="projectCreate">
      <ProjectCreateForm {...props} formik={formik} onSubmit={formik.handleSubmit}/>
    </div>
  )
}

const ProjectCreateForm = props => {
  return(
      <form className="new-project" onSubmit={props.onSubmit}>
          {props.formik.touched.title && props.formik.errors.title ?
              <div style={{border:'1px solid red', padding:'5px'}}>{props.formik.errors.title}</div>
              : null
          }
          {props.formik.touched.text && props.formik.errors.text ?
              <div style={{border:'1px solid red', padding:'5px'}}>{props.formik.errors.text}</div>
              : null
          }
        <input
            id={'title'}
            type="text"
            name='title'
            onChange={props.formik.handleChange}
            value={props.formik.values.title}
            placeholder='Название проекта'
            // ref={title}
        />


        <textarea
            // ref={projectAbout}
            onChange={props.formik.handleChange}
            value={props.formik.values.text}
            name="text"
            type={'text'}
            id="text"
            cols="60"
            rows="7"
            placeholder='Описание'>
        </textarea>


        <input type='file' multiple/>

        <div className='checkboxes'>
          <div className='checkboxes__item'>
            <input
                id={'css'}
                type="checkbox"
                name="css"
                onChange={props.formik.handleChange}
                value={props.formik.values.css}
            />
                <span>css</span>
          </div>
          <div className='checkboxes__item'>
            <input
                type="checkbox"
                name="html"
                id={'html'}
                onChange={props.formik.handleChange}
                value={props.formik.values.html}
            />
                <span>html</span>
          </div>
          <div className='checkboxes__item'>
            <input
                type="checkbox"
                name="javascript"
                id={'javascript'}
                onChange={props.formik.handleChange}
                value={props.formik.values.javascript}
            />
            <span>javascript</span>
          </div>
        </div>
        <div>
          <input
              type="text"
              name='price'
              className='price'
              // ref={price}
              placeholder='Цена за проект'
          />
          <span>uan</span>
        </div>
        <input type='submit' onClick={ props.addJob } value='Cоздать проект' className='createBtn'/>
      </form>
  )
}

export default ProjectCreate;