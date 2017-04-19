class Api::SessionsController < ApplicationController

  def create
    user_params = params[:user]
    @user = User.find_by_credentials(user_params[:email], user_params[:password])
    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: ["Invalid email or password"], status: 401
    end
  end

  def destroy
  
    @user = current_user

    if @user
      log_out
      render 'api/users/show'
    else
      render json: ["No one logged in"], status: 404
    end
  end

end
