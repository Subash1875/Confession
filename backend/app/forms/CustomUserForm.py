from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


class CustomUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ["username", "password1", "password2"]
    

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        
        self.fields["username"].widget.attrs.update({
            "id" : "username",
            "class" : "form-control",
            "placeholder" : "Username",
        })
        
        self.fields["password1"].widget.attrs.update({
            "id" : "password1",
            "class" : "form-control",
            "placeholder" : "Passsword",
        })
        
        self.fields["password2"].widget.attrs.update({
            "id" : "password2",
            "class" : "form-control",
            "placeholder" : "Repeat Password",
        })