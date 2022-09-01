import './Detail.css';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { setLoading } from '../redux/actions';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Detail() {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [open, setOpen] = useState(false);
	const [quantityAvailable, setquantityAvailable] = useState(false);
	const [rating, setRating] = useState('');
	const [reviews, setReviews] = useState('');
	const history = useHistory();
	const dispatch = useDispatch();
	// const { redLoading } = useSelector(state => state);
	const [cart, setCart] = useContext(ShoppingCartContext);
	// const [amount, setAmount] = useState(1);

	useEffect(() => {
		async function fetchData() {
			try {
				dispatch(setLoading(true));
				const response = await axios.get(`/products/${id}`);
				setProduct(response.data);
				dispatch(setLoading(false));
				console.log(id);
				const rating = await axios(`/review/score/${id}`).then(res => res.data);
				console.log('rating', rating.numberRevisions);
				// const averageScore = rating.averageScore;
				setRating(rating.averageScore);
				setReviews(rating.numberRevisions);
			} catch (error) {
				alert(error);
			}
		}
		fetchData();
	}, [dispatch, id]);

	const addToCart = () => {
		const selection = {
			name: product.name,
			designId: product.id,
			prodImageHome: product.img_home.secure_url,
			prodType:
				product.ProductTypes[document.querySelector('.detail-4').id].name,
			stockId:
				product.ProductTypes[document.querySelector('.detail-4').id].Stocks.id,
			price:
				product.ProductTypes[document.querySelector('.detail-4').id].Stocks
					.price,
			quantity: parseInt(document.querySelector('#quantity').value),
			stockQuantity: parseInt(
				product.ProductTypes[document.querySelector('.detail-4').id].Stocks
					.quantity
			),
		};

		const stock =
			product.ProductTypes[document.querySelector('.detail-4').id].Stocks
				.quantity;
		console.log(cart);

		const alreadySelected = cart.find(e => e.stockId === selection.stockId);

		if (alreadySelected) {
			if (alreadySelected.quantity + selection.quantity > stock) {
				// alert(`Stock available is only  ${stock} units`)
				setquantityAvailable(true);
			} else {
				setOpen(true);
			}
			alreadySelected.quantity =
				alreadySelected.quantity + selection.quantity > stock
					? stock
					: alreadySelected.quantity + selection.quantity;
		} else {
			setCart([...cart, selection]);
			setOpen(true);
		}
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
		setquantityAvailable(false);
	};

	const action = (
		<>
			<Button color='secondary' size='small' onClick={handleClose}>
				{/* UNDO */}
			</Button>
			<IconButton
				size='small'
				aria-label='close'
				color='inherit'
				onClick={handleClose}
			>
				<CloseIcon fontSize='small' />
			</IconButton>
		</>
	);

	if (!product.id) return <h1>Cargando...</h1>;

	const handleClick = e => {
		const miClassDiv = e.target.className.slice(0, 5);
		if (miClassDiv === 'dt4-1') {
			document.querySelector('.dt4-1').className = 'dt4-1 selected';
			document.querySelector('.dt4-2').className = 'dt4-2';
			document.querySelector(
				'.dt1-price'
			).innerHTML = ` Price: $ ${product.ProductTypes[0].Stocks.price}`;
			document.querySelector('#detail-5').innerHTML =
				product.ProductTypes[0].Stocks.quantity;
			document.querySelector(
				'#detail-7'
			).value = `${product.ProductTypes[0].Stocks.quantity}`;
			document.querySelector('.detail-4').id = 0;
			document.querySelector(
				'#quantity'
			).max = `${product.ProductTypes[0].Stocks.quantity}`;
			document.querySelector('#quantity').value = 1;
		} else {
			document.querySelector('.dt4-1').className = 'dt4-1';
			document.querySelector('.dt4-2').className = 'dt4-2 selected';
			document.querySelector(
				'.dt1-price'
			).innerHTML = ` Price: $ ${product.ProductTypes[1].Stocks.price}`;
			document.querySelector('#detail-5').innerHTML =
				product.ProductTypes[1].Stocks.quantity;
			document.querySelector(
				'#detail-7'
			).value = `${product.ProductTypes[1].Stocks.quantity}`;
			document.querySelector('.detail-4').id = 1;
			document.querySelector(
				'#quantity'
			).max = `${product.ProductTypes[1].Stocks.quantity}`;
			document.querySelector('#quantity').value = 1;
		}

		// document.getElementsByClassName(miClassDiv).classList.toggle('selected');
	};

	return (
		<div
			className='w-screen min-h-screen select-none -z-10
			bg-gradient-to-b from-black to-neutral-300  text-white flex flex-col items-center'
		>
			<div className='detail-content'>
				{/* LEFT COLUMN */}
				<div className='detail-content-left'>
					{/* Bootstrap Carousel */}
					<div
						id='carouselExampleIndicators'
						className='carousel slide'
						data-bs-ride='true'
					>
						<div className='carousel-indicators'>
							{product.img_detail.map((im, i) => (
								<button
									key={i}
									type='button'
									data-bs-target='#carouselExampleIndicators'
									data-bs-slide-to={i}
									className={`${i === 0 ? 'active' : ''}`}
									aria-current={`${i === 0 ? 'true' : ''}`}
									aria-label={`Slide ${i + 1}`}
								></button>
							))}
						</div>
						<div className='carousel-inner'>
							{product.img_detail.map((im, i) => (
								<div
									key={i}
									className={i === 0 ? 'carousel-item active' : 'carousel-item'}
								>
									<div
										style={{
											backgroundImage: `url(${im.secure_url})`,
										}}
										className='det-img d-block w-100'
										alt='...'
									/>
								</div>
							))}
						</div>
						<button
							className='carousel-control-prev'
							type='button'
							data-bs-target='#carouselExampleIndicators'
							data-bs-slide='prev'
						>
							<span
								className='carousel-control-prev-icon'
								aria-hidden='true'
							></span>
							<span className='visually-hidden'>Previous</span>
						</button>
						<button
							className='carousel-control-next'
							type='button'
							data-bs-target='#carouselExampleIndicators'
							data-bs-slide='next'
						>
							<span
								className='carousel-control-next-icon'
								aria-hidden='true'
							></span>
							<span className='visually-hidden'>Next</span>
						</button>
					</div>
				</div>

				{/* RIGHT COLUMN */}
				<div className='detail-content-right'>
					<div className='detail-1'>
						<div className='dt1-ref'>Ref-{product.id}</div>
						<div className='dt1-name'>{product.name}</div>
						<div className='dt1-price'>
							Price: $ {product.ProductTypes[0].Stocks.price}
						</div>
					</div>
					<div className='detail-2'>
						{rating !== 'NaN' && <span>{rating}</span>}
						<Rating rating={rating} />
						<Link to={`/rating/:${id}`}>
							<span className='dt2-3'>{`see all ${reviews} reviews`}</span>
						</Link>
					</div>
					<div className='detail-3'>
						<span>Colours</span>
						<div className='dt3'>
							<div
								className='dt3-1'
								style={{
									backgroundColor: `${product.Colors[0].hex}`,
									border: `2px solid ${product.Colors[0].hex}`,
								}}
							></div>
							<div
								className='dt3-2'
								style={{
									backgroundColor: `${product.Colors[1].hex}`,
									border: `2px solid ${product.Colors[1].hex}`,
								}}
							></div>
							<div
								className='dt3-3'
								style={{
									backgroundColor: `${product.Colors[2].hex}`,
									border: `2px solid ${product.Colors[2].hex}`,
								}}
							></div>
						</div>
					</div>
					<div className='detail-4' id={0}>
						<span>Type</span>
						<div className='dt4'>
							<div className='dt4-1 selected' onClick={handleClick}>
								<p className='dt4-1-p1'>{product.ProductTypes[0].name}</p>
								<p className='dt4-1-p2'>{`${product.ProductTypes[0].diameter} cm`}</p>
							</div>
							<div className='dt4-2' onClick={handleClick}>
								<p className='dt4-2-p1'>{product.ProductTypes[1].name}</p>
								<p className='dt4-2-p2'>{`${product.ProductTypes[1].diameter} cm`}</p>
							</div>
						</div>
					</div>
					<div className='mt-10'>
						<span>Stock: </span>
						<span id='detail-5' className='ml-2'>
							{product.ProductTypes[0].Stocks.quantity}
						</span>
						<span> un</span>
					</div>

					<div className='mt-4 w-full flex items-center'>
						<span>Select quantity:</span>
						<div className='flex'>
							<i
								className='fa-solid  items-center fa-minus ml-4 mt-1 h-fit cursor-pointer'
								onClick={() =>
									document.querySelector('#quantity').value > 1 &&
									document.querySelector('#quantity').value--
								}
							></i>
							<div id='detail-7'>
								<input
									className='text-white text-center bg-transparent w-10 caret-transparent after
								'
									min='1'
									max={product.ProductTypes[0].Stocks.quantity}
									readOnly
									type='number'
									id='quantity'
									value='1'
								/>
							</div>
							<i
								className='fa-solid fa-plus mt-1 h-fit cursor-pointer'
								onClick={() => {
									console.log(document.querySelector('#quantity').max);
									const max = Number(document.querySelector('#quantity').max);
									document.querySelector('#quantity').value < max &&
										document.querySelector('#quantity').value++;
								}}
							></i>
						</div>
					</div>

					<div className='detail-6'>
						<div onClick={addToCart} className='dt6-1'>
							Add to bag
						</div>
						<div className='dt6-2'>Add to wishlist</div>
					</div>
				</div>
			</div>
			<button
				onClick={() => history.push('/home')}
				className='btn btn-red mt-4'
			>
				back
			</button>
			<Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
				message='Product added to Bag'
				action={action}
			/>
			<Snackbar
				open={quantityAvailable}
				autoHideDuration={3000}
				onClose={handleClose}
				message={`Products added to Bag limited to the maximum quantity of stock available`}
				action={action}
			/>
		</div>
	);
}

export default Detail;
