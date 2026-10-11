import { useLikes } from '../context/LikesContext'
import Button from './ui/Button'

type LikeButtonProps = {
  className?: string
}

function LikeButton({ className }: LikeButtonProps) {
  const { likes, addLike } = useLikes()

  return (
    <Button
      variant="primary"
      className={className}
      onClick={addLike}
    >
      ♥ {likes}
    </Button>
  )
}

export default LikeButton