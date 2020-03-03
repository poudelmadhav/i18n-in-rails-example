class ApplicationController < ActionController::Base
  around_action :switch_locale
   
  def switch_locale(&action)
    locale = extract_locale_from_params || I18n.default_locale
    I18n.with_locale(locale, &action)
  end

  def extract_locale_from_params
    parsed_locale = params[:locale]
    I18n.available_locales.map(&:to_s).include?(parsed_locale) ? parsed_locale : nil
  end
end
