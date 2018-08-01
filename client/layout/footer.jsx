
import className from '../assets/styles/footer.styl'

export default{
  data () {
    return {
      author: 'Jokcy'
    }
  },
  render () {
    return (
      <div id={className.footer}>
        <span>Write by {this.author}</span>
      </div>
    )
  }
}
