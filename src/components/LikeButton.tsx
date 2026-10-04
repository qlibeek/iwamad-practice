import { useLikes } from '../context/LikesContext'

type LikeButtonProps = {
  className?: string
}

function LikeButton({ className }: LikeButtonProps) {
  const { likes, addLike } = useLikes()

  return (
    <button
      type="button"
      className={className}
      onClick={addLike}
    >
      ♥ {likes}
    </button>
  )
}

export default LikeButton