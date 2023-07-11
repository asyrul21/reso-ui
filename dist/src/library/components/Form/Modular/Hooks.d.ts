export declare const useFormData: () => {
    formData: {};
    setFormData: (key: string, value?: string | null | undefined) => void;
};
export declare const useModularFormContext: (formName: string) => import("..").IFormDataContext;
export declare const useModularSubForm: (parentFormName: string, subFormDataKey: string) => {
    subFormData: any;
    setSubFormData: (key: string, value: string) => void;
};
/**
 * Example Form Data Model:
 *
 * {
 *    batch: 2020,
 *    student: {
 *      name: 'john',
 *      age: 21,
 *      contact: {
 *        home: '1234',
 *        mobile: '5678'
 *      }
 *    }
 * }
 *
 * A. For top level data (eg. batch):
 * ---------------------------------
 *
 * const {formData, setFormData} = useFormData()
 * const onInputChange = (e) => {
 *    const value = e.target.value;
 *    setFormData('batch', value)
 * }
 *
 *
 *
 * B. For modular approach (creating another subform component):
 *  ----------------------------------------------------------
 *
 * 1. Create form name, context and register parent form context
 *  const formName = "studentForm"
 *  const ParentFormContext = registerFormContext(formName, createParentFormDataContext())
 *
 * 2. In render: (
 *    <ParentFormContextProvider parentFormContext={ParentFormContext}>
 *        <SubForm1 parentFormName={formName}/>
 *        <SubForm2 parentFormName={formName}/>
 *    </ParentFormContextProvider>
 *  )
 *
 * 3. In your subform:
 *
 *  props extends ISubForm - parentFormName
 *
 *  const {subFromData: studentData, setSubFormData: setStudentData} = useModularSubForm(parentFormName, 'student')
 *
 * onNameInputChange((e) => {
 *    const value = e.target.value;
 *    setStudentData('name', value) - this will call parent's setFormData
 * })
 *
 * C. For modular approach with multiple levels (a subform component which has another subform):
 *  -----------------------------------------------------------------------
 *
 * 1. In your SubForm, creat a form name, context and register
 *
 *  const subFormName = "studentContactForm"
 *  const ParentFormContext = registerFormContext(subFormName, createParentFormDataContext())
 *
 * 2. Create Provider
 *  const SubSubFormProvider = createFormDataContextProvider(ParentFormContext)
 *
 * 3. In render: (
 *    <ParentFormContextProvider parentFormContext={ParentFormContext}>
 *        <SubSubForm1 parentFormName={subFormName}/>
 *    </ParentFormContextProvider>
 *  )
 *
 *  * 4. In your subsubform:
 *
 *  props extends ISubForm - parentFormName
 *
 *  const {subFromData: studentContactData, setSubFormData: setStudentContactData} = useModularSubForm(parentFormNamr, 'contact')
 *
 *  onMobileInputChange((e) => {
 *    const value = e.target.value;
 *    setStudentContactData('mobile', value) - this will call parent's setStudentData, which calls it's parent's setFormData
 *  })
 *
 */
