const now = () => new Date().toISOString();

module.exports = function User({
  id,
  description,
  completed,
  user_id,
  created_at = now(),
  updated_at = now(),
} = {}) {
  this.id = id;
  this.description = description;
  this.completed = completed;
  this.user_id = user_id;
  this.created_at = created_at;
  this.updated_at = updated_at;
};
