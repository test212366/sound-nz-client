import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useActions, useTypeSelector } from "../hooks/redux"

const Login  = () => {
	const {viewLoginWrapper, viewLogin, viewRegistration, user} = useTypeSelector(state => state.login),
		{viewWrapperLogin, viewLoginF, viewRegistrationF, registration, login, loginLocal} = useActions(),
		{register, formState: {errors, isValid}, handleSubmit} = useForm({mode: "onBlur"})

	//TODO: Доработать ошибки при регистрации
 
	useEffect(() => {
		loginLocal()
	}, [])
		const handlerCl = (e: any) => {
			if(e.target.className === 'back__login activeW') viewWrapperLogin(false) 
		},
		setViewLogin = () => viewLoginF(!viewLogin),
		setRegistration = () => viewRegistrationF(!viewRegistration),
		regist = (data: any) => registration(data),
		log = (data: any) => login(data)

	return (
		<section onClick={handlerCl} className={["back__login", viewLoginWrapper ? "activeW" : ''].join(' ')}>
			<div className="login__wrapper"  >
				{viewLoginWrapper && !viewLogin && viewRegistration && !user?.isActivated && user !== null && <>
					<p className="confirmEmail">In your email send message in link to confirm your account go to link. Confirm Email</p>
					<button>exit account</button>
				</>}
				{viewLoginWrapper && !viewLogin && !viewRegistration && <>
					<p  className="login__title">Login in account</p >
					<button onClick={setViewLogin}>Login</button>
					<button onClick={setRegistration}>Registration</button> 
				</>   }
   			{viewLoginWrapper && viewLogin && !viewRegistration && user === null &&  <>
					<p className="login__title">Login</p>
							<input type="email" {...register('email',{
                            required: 'email is required',
                            minLength: {
                                value: 6,
                                message: 'email must be 6 sumb'
                            }})}  placeholder="emit email"   />
                        <input type="password" {...register('password', {
                            required: 'password  is required',
                            minLength: {
                            value: 5,
                            message: 'password must be 5 sumb'
                        },
                            maxLength: {
                            value: 11,
                            message: 'password length 11 sumb'
                        }
                        })}   placeholder="emit password"/>
                        
							<button onClick={handleSubmit(log)}> login </button>
							<div onClick={setViewLogin} className="down"><svg  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 width="30px" height="30px" viewBox="0 0 963 963" >
<g>
	<path d="M0,481.5C0,747.4,215.6,963,481.5,963C747.4,963,963,747.4,963,481.5C963,215.6,747.4,0,481.5,0C215.5,0,0,215.6,0,481.5z
		 M691.601,543.3L478.2,776.601C460.4,796,436.101,805.8,411.8,805.8c-21.699,0-43.5-7.8-60.699-23.6
		c-36.7-33.6-39.2-90.5-5.601-127.2l157.8-172.399L340.601,305.3c-33.601-36.6-31.101-93.6,5.5-127.2
		c36.6-33.6,93.6-31.1,127.199,5.5l218.2,238.1C723,456.101,723.101,508.9,691.601,543.3z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
							</div>
				</> }
				{viewLoginWrapper && !viewLogin && viewRegistration && user === null &&  <>
					<p className="login__title">Registration</p>
								<input type="email" {...register('email',{
                            required: 'email is required',
                            minLength: {
                                value: 6,
                                message: 'email must be 6 sumb'
                            }})}  placeholder="emit email"   />
                        <input type="password" {...register('password', {
                            required: 'password  is required',
                            minLength: {
                            value: 5,
                            message: 'password must be 5 sumb'
                        },
                            maxLength: {
                            value: 11,
                            message: 'password length 11 sumb'
                        }
                        })}   placeholder="emit password"/>
								<input type="text" {...register('name',{
                            required: 'name is required',
                            minLength: {
                                value: 6,
                                message: 'name must be 6 sumb'
                            }})}  placeholder="emit name"   />
                   
							<button onClick={handleSubmit(regist)}> registration </button>
							<div onClick={setRegistration} className="down"><svg  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 width="30px" height="30px" viewBox="0 0 963 963" >
<g>
	<path d="M0,481.5C0,747.4,215.6,963,481.5,963C747.4,963,963,747.4,963,481.5C963,215.6,747.4,0,481.5,0C215.5,0,0,215.6,0,481.5z
		 M691.601,543.3L478.2,776.601C460.4,796,436.101,805.8,411.8,805.8c-21.699,0-43.5-7.8-60.699-23.6
		c-36.7-33.6-39.2-90.5-5.601-127.2l157.8-172.399L340.601,305.3c-33.601-36.6-31.101-93.6,5.5-127.2
		c36.6-33.6,93.6-31.1,127.199,5.5l218.2,238.1C723,456.101,723.101,508.9,691.601,543.3z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
							</div>
				</>}
			</div>
		</section>
	)
}
export default Login