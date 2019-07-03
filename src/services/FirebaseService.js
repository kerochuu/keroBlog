import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const POSTS = 'posts'
const PORTFOLIOS = 'portfolios'

// Setup Firebase
/*const config = {
    projectId: 'webmobile-base',
    authDomain: 'webmobile-base.firebaseapp.com',
    apiKey: 'AIzaSyD049THtbF4aobueRd1XXQOtccg7HFkLrY',
    databaseURL: 'https://webmobile-base.firebaseio.com',
    storageBucket: 'gs://webmobile-base.appspot.com'
}*/

const config = {
   projectId: 'seungmi-9b62b',
   authDomain: 'seungmi-9b62b.firebaseapp.com',
   apiKey: 'AIzaSyA7quezEBiJqKHI-T1q62dthossqGXtJFM',
   databaseURL: 'https://seungmi-9b62b.firebaseio.com',
   storageBucket: 'gs://seungmi-9b62b.appspot.com'
}

firebase.initializeApp(config)
const firestore = firebase.firestore()

export default {
	getPosts() {
		const postsCollection = firestore.collection(POSTS)
		return postsCollection
				.orderBy('created_at', 'desc')
				.get()
				.then((docSnapshots) => {
					return docSnapshots.docs.map((doc) => {
						let data = doc.data()
						data.created_at = new Date(data.created_at.toDate())
						return data
					})
				})
	},
	postPost(title, body) {
		return firestore.collection(POSTS).add({
			title,
			body,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
		})
	},
	getPortfolios() {
		const postsCollection = firestore.collection(PORTFOLIOS)
		return postsCollection
				.orderBy('created_at', 'desc')
				.get()
				.then((docSnapshots) => {
					return docSnapshots.docs.map((doc) => {
						let data = doc.data()
						data.created_at = new Date(data.created_at.toDate())
						return data
					})
				})
	},
	postPortfolio(title, body, img) {
		return firestore.collection(PORTFOLIOS).add({
			title,
			body,
			img,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
		})
	},
	loginWithGoogle() {
		let provider = new firebase.auth.GoogleAuthProvider()
		return firebase.auth().signInWithPopup(provider).then(function(result) {
			let accessToken = result.credential.accessToken
			let user = result.user
			return result
		}).catch(function(error) {
			console.error('[Google Login Error]', error)
		})
	}
}
