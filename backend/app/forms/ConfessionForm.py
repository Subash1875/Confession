from app.models.ConfessionModel import Confessions
from django import forms

class ConfessionForm(forms.ModelForm):
    class Meta:
        model = Confessions
        fields = ["content"]
        widgets = {
            "content" : forms.Textarea(attrs={"class" : "form-control", "placeholder" : "Write whatever you want...."})
        }