from django import forms
from app.models.CommentModel import Comments

class CommentForm(forms.ModelForm):  
    class Meta:
        model = Comments
        fields = ["comment"]
        widgets = {
            "comment" : forms.TextInput(attrs={"class" : "form-control", "placeholder" : "write here...", "autocomplete" : "off"})
        }