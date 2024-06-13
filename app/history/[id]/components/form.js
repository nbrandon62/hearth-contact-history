import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

const defaultValues = {
  title: '',
  timestamp: '',
  description: '',
}

const customValidation = Yup.object({
  title: Yup.string()
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  timestamp: Yup.string().required('Required'),
})

export const EventForm = ({ setEvent, onClose }) => {
  function onSubmit(values, actions){
    const newEvent = values;
    setEvent(newEvent)
    actions.resetForm()
    onClose()
  }

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={customValidation}
      onSubmit={(values, actions) => onSubmit(values, actions)}
      isSubmitting={false}
    >
      {(props) => (
        <>
          <Form className='grid gap-3	'>
            <MyInput label='Event Name' name='title' type='text' />
            <MyInput label='Date' name='timestamp' type='date' />
            <MyInput
              label='Description (optional)'
              name='description'
              type='text'
            />

            <div className='mt-5 flex justify-end'>
              <button
                className="bg-orange-500"
                disabled={props.isSubmitting}
                type='submit'
              >
                Submit
              </button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  )
}

function MyInput({ label, ...props }) {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  )
}

export default EventForm
